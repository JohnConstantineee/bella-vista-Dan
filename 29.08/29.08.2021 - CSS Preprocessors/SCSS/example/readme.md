## Вложенные правила

#### CSS
```css
header {
    background: #1ecaab;
}

header button {
    border: 1px solid #fff;
}

header p {
    font-size: 16px;
}
```

#### SCSS
```scss
header {
    background: #1ecaab;

    button {
      border: 1px solid #fff;
    }
    
    p {
      font-size: 16px;
    }
}
```

## Амперсанд

#### CSS
```css
.link {
    text-decoration: none;
    cursor: pointer;
}

.link:hover {
    color: #1ecaab;
}

.link:visited {
    color: #04BEFE;
}

.link.active {
    cursor: default;
    pointer-events: none;
    color: #3d3d3d;
}

.link-header {
    font-size: 13px;
    color: #fff;
}
```

#### SCSS
```scss
.link {
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #1ecaab;
  }
  
  &:visited {
    color: #04BEFE;
  }
  
  &.active {
    cursor: default;
    pointer-events: none;
    color: #3d3d3d;
  }
  
  &-header {
    font-size: 13px;
    color: #fff;
  }
}
```

## Расширения
Вы столкнетесь с ситуацией, когда вам нужно будет переиспользовать стили. Рассмотрите следующий пример:

```html
<p class="paragraph">Some text...</p>
<p class="paragraph-secondary">Some another text...</p>
```

```css
.paragraph, .paragraph-secondary {
    color: #3d3d3d;
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 20px;
}

.paragraph-secondary {
    letter-spacing: 1px;
    word-spacing: 10px;
    font-style: italic;
}
```

```scss
.paragraph {
    color: #3d3d3d;
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 20px;
}

.paragraph-secondary {
  @extend .paragraph;
  letter-spacing: 1px;
  word-spacing: 10px;
  font-style: italic;
}
```

Если вы не хотите, чтобы директива расширения была скомпилена в CSS, вы можете использовать ```%``` перед селектором.

```scss
%paragraph {
    color: #3d3d3d;
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 20px;
}

.paragraph-primary {
  @extend %paragraph;
  letter-spacing: 1px;
  word-spacing: 10px;
  font-style: italic;
}

.paragraph-secondary {
  @extend %paragraph;
  letter-spacing: 1px;
  word-spacing: 10px;
  font-style: italic;
}
```



#### SCSS
```scss
.link {
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #1ecaab;
  }
  
  &:visited {
    color: #04BEFE;
  }
  
  &.active {
    cursor: default;
    pointer-events: none;
    color: #3d3d3d;
  }
  
  &-header {
    font-size: 13px;
    color: #fff;
  }
}
```


## Переменные
Sass/SCSS позволяет работать с переменными. В CSS они обозначаются двойным тире ```--```, а в препроцессорах знаком доллара ```$```.

#### SCSS
```scss
// Font-sizes
$large: 24px;
$medium: 20px;
$small: 16px;

// Colors
$primary-color: #1ecaab;
$secondary-color: #3f3f3f;
$text-color: #0b0b0b;


header {
  background: $primary-color;
  
  p {
    font-size: $small;
    color: $text-color;
  }
}

footer {
  background: $secondary-color;

  p {
    font-size: $small;
    color: $text-color;
  }
}

main {
  .container {
    background: $secondary-color;
    
    h1, h2, h3 {
      font-size: $large;
      color: $text-color;
    }
    
    p {
      font-size: $medium;
      color: $text-color;
    }
  }
}
```

## Миксины (они же примеси)
Миксины объявляются директивой ```@mixin```. После неё должно стоять имя миксина и, опционально, его параметры, а также блок, содержащий тело миксина.  
  
Миксины позволяют вам определять стили, которые могут быть переиспользованы на протяжении всей таблицы стилей. Вы можете думать о миксинах, как о функциях в каком-либо другом языке програмирования. Вы можете передавать переменные, также как в функциях любого другого языка програмирования. В SCSS миксины возврашают набор CSS правил.

Для обращения к миксину используется директива ```@include```.

#### SCSS
```scss
@mixin flex-column {
  display: flex;
  flex-direction: column;
}

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}


.container-1 {
  @include flex-column;
}

.container-2 {
  @include flex-center;
}

.footer {
  @include flex-center;
  font-size: 13px;
  flex-direction: column;
}
```

```scss
@mixin flex ($direction: row, $justify-content: flex-start, $align-items: flex-start) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify-content;
  align-items: $align-items;
}

.container-1 {
  @include flex;
}

.container-2 {
  @include flex(column);
}

.container-3 {
  @include flex(column, center, center);
}
```

## Импорты

```scss
@import "src/styles/header"; // импортирует src/styles/header.scss

@use "src/styles/header"; // тоже импортирует src/styles/header.scss
```

Новый @use похож на @import, но имеет некоторые заметные отличия:

* По умолчанию все импортированные элементы имеют пространство имен.

#### Файлы с символом "_" в начале имени считаются системными и не компилируются в сss


## SCSS поддерживает математические операции
SassScript поддерживает стандартные арифметические операции над числами (сложение +, вычитание -, умножение *, деление / и остаток от деления по модулю %)  
https://sass-scss.ru/documentation/sassscript/chislovie_operatsii/

```scss
.container {
  width: 100%;
  height: 6 / 19 * 100%;
}
```

## Интерполяция #{}
* Вы можете использовать переменные SassScript в селекторах и в названиях свойств используя синтаксис ```#{}``` интерполяции:
* Также можно использовать ```#{}```, чтобы вставить в SassScript значение свойств. Использование ```#{}``` означает, что любые операции в нем будут рассматриваться как запись CSS. Например:

```scss
$current-container: 2;

.container-#{$current-container} {
  width: 100%;
  padding: 10px * $current-container;
}

.container-#{$current-container + 1} {
  width: 100%;
  padding: 10px * ($current-container + 1);
}
```
## Циклы
https://sass-guidelin.es/ru/#section-55

```scss
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
```

## Архитектура приложения
https://sass-guidelin.es/ru/#section-39
