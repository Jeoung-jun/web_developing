# HTML5

## HTML 기본구조와 기본태그
- !DOCTYPE HTML : 브라우저에 선언
- html : html 전체를 감싸는 태그
- head : 문서에 대한 정보를 나타남, 하나만 존재, html 바로 아래에 있어야 함
- title : Head 안에 들어가는태그로 제목표시줄의 내용
- Meta : 문서에 대한 설명, 사람에게 보이지는 않고 브라우저만 읽을 수 있음, charset = "utf-8" 등의 형태, 
- body ; 실제적으로 화면에 보여지는 부분, 하나만 존재해야 하고, html 바로 아래, head 다음에 위치

예시
```
<!DOCYTYPE HTML>
<html>
<head>
<title>중첩 TAG</title>
<meta charset="UTF-8">
</head>
<body>
<h1>제목입니다.</h1>
<p>문단입니다</p>
</body>
</html>
```
- html tag 는 head, body를 중첩
- head는 title과 meta를 중첩
- body는 h1과 p를 중첩
- end tag가 오기전에 새로운 start 태그가 올 수 없음
___

### 1. Heading
- H1 부터 h6까지 존재함
- 중요도에 따라서 6단계로 구분, h1이 가장 중요한 Heading
- 중요도에 따라서 더 크고 굵은 글자로 표현함

### 2. Paragraphs
- p, /p 는 문단의 약자로, 하나의 문단을 만들 떄 사용함
예시
```
<!DOCTYPE HTML>
<html>
<head>
<title>HTML Headings</title>
<meta charset="UTF-8">
</head>
<body>
<p>First Paragraph</p>
<p>Second Paragraph</p>
<p>HTML & CSS is <br>
      very exciting!!!  
</p>
</body>
</html>
```

- html line break
    - br tag는 Break를 뜻하고, 강제로 줄바꿈을 하고 싶을 떄 사용
- html horizontal rules
    - hr tag는 문단을 의미적으로 분리하고자 할 때 수평선을 그어줌
- html preformatted Text
    - pre tag 는 preformatted text를 뜻함
    - 엔터, 탭, 스페이스바를 입력하면 입력한 형태 그대로 출력해줌

### 3. Text Formatting
- 텍스트에 특별한 의미를 부여하는 태그들
    - b : 굵게 출력
    - strong : 굵고 출력, 중요함을 의미
    - i : 이탤릭체로 출력
    - em : 이탤릭체, 중요함을 의미
    - small : 폰트 크기를 작게
    - sub : 첨자 텍스트
    - sup : 위첨자 텍스트
    - ins : 삽입된 텍스트에 밑줄
    - del : 취소선
    - mark : 형광펜처럼 강조

### 4. Quotation/Comment
- q: quote 의 약자이고, 짧은 문장을 인용할 때 쓰이는 태그, 큰 따옴표로 표시됨
- blockquote: 긴 문장을 인용할 때 쓰이는 태그, 들여쓰기로 표시됨
- abbr: abbreviation의 약자, 밑줄이 그어진 축약 텍스트에 마우스를 올리면 말풍선처럼 표시됨
- Comment: 브라우저에 보여지는 것이 아니라 어떠한 기능을 하는 코드라고 표시하거나 사람에게 알리는 기능을 함

### 5. Links
```
<a href="https://wikidocs.net/">위키독스</a>
1. <a href="https://wikidocs.net/" target="_self">위키독스</a>
2. <a href="https://wikidocs.net/" target="_blank">위키독스</a>
3. <a href="https://wikidocs.net/" target="_parent">위키독스</a>
4. <a href="https://wikidocs.net/" target="_top">위키독스</a>
```
- a: anchor의 약자이고 하이퍼링크를 의미함
- 위키독스: 브라우저에 보여지는 텍스트
- href: Hypertext Reference의 약자, 연결할 주소를 지정함
- target속성
    - _self: 현재 창에서 해당 주소 문서가 열림
    - _blank: 현재 창이 아니라 새 창/탭에서 해당 주소 문서를 연다. 
    - _parent: 현재 보다 상위 프레임에서 해당 주소 문서를 연다. 
    - _top: Root프레임에서 해당 주소 문서를 연다. 
- link state
    - link: 한번도 방문한적 없는 상태. 파란색
    - visited: 한번이라도 방문한 상태. 보라색
    - hover: 링크위에 마우스를 올려놓은 상태. 빨간색
    - active: 링크를 마우스로 누른 상태, css3으로 사용자가 지정
