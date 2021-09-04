## Media queries

Медиавыражения используются в тех случаях , когда нужно применить разные CSS-стили, для разных устройств по типу отображения (например: для принтера, монитора или смартфона), а также конкретных характеристик устройства  (например: ширины окна просмотра браузера).

### Медиа для разных типов устройств

Медиавыражения позволяют адаптировать страницу для различных типов устройств, таких как: принтеры, речевых браузеров, устройств Брайля, телевизоров и так далее.

```html
<p class="only-screen">Учитывая огромное количество подключаемых к интернету устройств, медиавыражения являются очень важным инструментом при создании веб-сайтов и приложений, которые будут правильно работать на всех доступных устройствах, которые  есть у ваших пользователей. </p>
<p class="only-print">Например это правило для принтеров:</p>
```

```css
@media screen {
    .only-print {
        display: none;
    }
    
    .only-screen {
        display: block;
    }
}

@media print {
    .only-print {
        display: block;
    }

    .only-screen {
        display: none;
    }
}
```

[Все типы устройств](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types) 


### Узконаправленные @media
Media features описывают некие характеристики определённого user agent, устройства вывода или окружения. Например, вы можете применить выбранные стили  только для широкоэкранных мониторов, компьютеров с мышью, или для устройств, которые используются в условиях слабой освещённости.

```html
<div class="only-pointer">
    <button>I have hover</button>
    <p>Some text</p>
</div>

<div class="without-pointer">
    <p>Oops... You can't see button on this devise.</p>
</div>
```

```css
@media (any-pointer: fine) {
    .only-pointer {
        display: block;
    }

    .without-pointer {
        display: none;
    }
}

@media (any-pointer: coarse) {
    .only-pointer {
        display: none;
    }

    .without-pointer {
        display: block;
    }
}
```

[Полный список](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features)


### Остановимся отдельно на ```min-width``` и ```max-width```
Ниже реализован подход "desktop-first"

```html
<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>
```

```css
ul {
   list-style: none;
    display: flex;
    padding: 30px;
    box-sizing: border-box;
    background: peru;
}

ul li {
    margin: 0 15px;
    font-size: 20px;
    color: #2c2c2c;
}

@media (max-width: 992px) {
    ul {
        padding: 20px;
        background: plum;
        flex-direction: column;
    }

    ul li {
        margin: 15px 0;
        font-size: 18px;
    }
}

@media (max-width: 576px) {
    ul {
        padding: 10px;
        background: tomato;
    }

    ul li {
        margin: 10px 0;
        font-size: 14px;
    }
}
```

А теперь тот же код, но "mobile-first"

```html
<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>
```

```css
ul {
   list-style: none;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    background: tomato;
    flex-direction: column;
}

ul li {
    margin: 10px 0;
    font-size: 14px;
    color: #2c2c2c;
}

@media (min-width: 576px) {
    ul {
        padding: 20px;
        background: plum;
    }

    ul li {
        margin: 15px 0;
        font-size: 18px;
    }
}

@media (min-width: 992px) {
    ul {
        padding: 30px;
        background: peru;
    }

    ul li {
        margin: 0 15px;
        font-size: 20px;
    }
}
```

[Почему "mobile-first"](https://habr.com/ru/post/269419/)


## AND
Иногда вы хотите создать медиавыражение, включающее в себя несколько условий. В таком случае применяются логические операторы: not, and, and only. 

```html
<p>Hello, dear friends. You can see me only on long landscaped devises</p>
```

```css
p {
    display: none;    
}

@media (min-width: 800px) and (orientation: landscape) {
    p {
        display: block;
    }
}
```

## NOT

Ключевое слово not инвертирует значение всего медиа-запроса.


```html
<p>Hello, dear friends. You can see me any devises except screens</p>
```

```css
p {
    display: none;    
}

@media not screen {
    p {
        display: block;
    }
}
```
## Контрольные точки (Breakpoints)

Контрольные точки (Breakpoints) - это триггеры настраиваемой ширины, которые определяют поведение адаптивного макета в зависимости от размеров устройства или области просмотра.  

[Bootstrap breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/)
