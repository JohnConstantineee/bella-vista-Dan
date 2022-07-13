# Viewport

Viewport - это видимая пользователю область веб-страницы, то, что может увидеть пользователь, не прибегая к прокрутке.

Meta-тег viewport сообщает браузеру о том, как именно обрабатывать размеры страницы, и изменять её масштаб. Этот тег необходимо добавлять в секцию HEAD.

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

## Атрибуты метатега viewport
#### 1. width – ширина области просмотра.  

```Значением атрибута является целое неотрицательное число от 200 до 10000 пикселей или константа device-width, которая задаёт ширину страницы в соответствии с размером экрана.```  

#### 2. height – высота области просмотра.  

```Значением атрибута является целое неотрицательное число от 233 до 10000 пикселей или константа device-height, которая задаёт высоту страницы в соответствии с размером экрана.```
  
*Примечание: если указан атрибут width, указывать атрибут height не обязательно.*

#### 3. initial-scale – начальный масштаб страницы.

```Значением атрибута является вещественное число от 0.1 до 1.0. Значение 1.0 определяет масштаб 1:1, т.е. «не масштабировать».```

 *Примечание: рекомендуется использовать: initial-scale=1.0.*

#### 4. user-scalable – доступность масштабирования страницы пользователем.

```Значение атрибута является логическое «yes» (1) – можно масштабировать или «no» (0)– нельзя масштабировать.```

*Примечание: рекомендуется использовать значение «yes», т.к. оно установлено по умолчанию, то user-scalable можно и не указывать.*

#### 5. minimum-scale – минимальный масштаб области просмотра.
#### 6. maximum-scale – максимальный масштаб области просмотра.

*Примечание: избегайте атрибутов user-scalable, minimum-scale и maximum-scale, т.к. они отрицательно сказываются на доступности содержания.*




[Источник](https://developer.mozilla.org/ru/docs/Glossary/Viewport)