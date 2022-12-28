# MY Bias
좋아하는 GIF에 하트를 남기고 댓글로 소통할 수 있습니다.  
MyTab에서는 유저가 좋아요한 GIF 컬렉션을 볼 수 있습니다.  


## Dev Stack
BE : node.js, express, mysql  
FE : Flutter

### GIF OPEN API 
https://developers.giphy.com/

### BE Flow
```mermaid
flowchart LR
    A1[main]
    A2[router]
    A3[controller]
    A4[repository]
    A5[database]
    A1 --> A2 <--> A3 <--> A4 <--> A5
```

### DB ERD
```mermaid
erDiagram
USERS{
	int id PK
	stirng username FK
	string password
	string name
	TEXT url
}
COMMENTS{
	int id PK
	string text
	string gifId
  DATETIME createdAt
	int userId FK
}
CHILD_COMMENTS{
	int id PK
	string text
  DATETIME createdAt
	int userId
	int commentsId FK
}
FAVORITS{
	int id PK
	string gifId
	bool is_favorite
	int userID FK
}
USERS ||--O{COMMENTS: ""
COMMENTS ||--o{ CHILD_COMMENTS : ""
USERS ||--o{ FAVORITS : ""
```

## 메인 페이지
<img src="images/main.png" width=auto height="500"/>

## 디테일 페이지
<img src="images/detail1.png" width=auto height="500"/>
<img src="images/detail2.png" width=auto height="500"/> 

## 마이탭
<img src="images/mytab.png" width=auto height="500"/>

## DEMO
![](demoo.gif) 