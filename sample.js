const { isRegExp } = require('util');

const sqlite3 = require ('sqlite3').verbose();
let db =new sqlite3.Database('blog.db',(err)=>{
if (err) {
return console.error (err.mesasages);

}
console.log('connection to the blog sqlite');

});


/*db.run ('create table art (articleid integer primary key ,articleName text,author text,date text)'
   , function(err) {
    if(err){ return console.log(err.message);}
       console.log('table one created');
   });
   db.run( 'create table com(commentid integer primary key,name text, content text ,date text,articleid integer ,foreign key(articleid) references art(articleid))'
   ,  err => {
    if(err) return console.log(err.message)

    console.log("comments table created!")
});*/

   
/*db.run('insert into art(articleid,articleName,author,date)' +
'VALUES  (6666,"Ruby","Hasan","2019"),'+
                           '(7777,"Ruby","Ali","2020"),'+
                           '(8888,"PHP","Ahmad","2020"),'+
                           '(9999,"Laravel","Ahmad","2019")', function(err){
                    if(err){
                        return console.log(err.message);
                    }
                    console.log("Data Inserted To Articles Table");
});*/


/*db.run('insert into com(name,content,date,articleid)'+
'VALUES ("مرحبًا مقالة رائعة","Ahmad","2019",1111),'+
                           '("شكرًا لك على هذه المقالة","Hadi","2019",2222),'+
                           '("من أروع المقالات التي قرأتها","Hasan","2020",3333),'+
                           '("مقالة رائعة","Fatema","2019",4444),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2019",1111),'+
                           '("مرحبًا مقالة رائعة","Hasan","2019",2222),'+
                           '("مرحبًا مقالة رائعة","Hadi","2019",2222),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2019",1111),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2020",1111),'+
                           '("مرحبًا مقالة رائعة","Hadi","2020",4444),'+
                           '("مرحبًا مقالة رائعة","Mohamad","2020",2222),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2020",4444),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2019",1111),'+
                           '("المقال غير جيد يمكن أن يكون أفضل","Ahmad","2020",1111),'+
                           '("مرحبًا مقالة رائعة","Hadi","2020",4444),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2020",1111),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2020",2222),'+
                           '("شكرًا لك استاذي على هذا المقال الرائع","Mohamad","2020",5555),'+
                           '("مرحبًا مقالة رائعة","Hadi","2019",1111),'+
                           '("مرحبًا مقالة رائعة من أروع المقالات التي قرأتها","Ahmad","2020",5555),'+
                           '("مرحبًا مقالة رائعة","Mohamad","2020",4444),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2019",2222),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2020",1111),'+
                           '("مرحبًا مقالة رائعة","Hadi","2020",4444),'+
                           '("مرحبًا مقالة رائعة","Ahmad","2020",5555),'+
                           '("مرحبًا مقالة رائعة","Mohamad","2020",1111),'+
                           '("أرجو زيارة صفحتي والإعجاب بها، يوجد بها الكثير من المنتجات الرائعة","Ali","2019",5555)', function(err){
                    if(err){
                        return console.log(err.message);
                    }
                    console.log("Data Inserted To Comments Table");
});*/
/*db.all('select *from art where date ="2019"' , function(err,table) {
if(err){ return console.log(err.mesasage);}
console.log(table);

});
db.all('select articleName,date,( select count(*) from com where art.articleid=com.articleid )as number from art'
,

function(err,result) {
    if(err){ return console.log(err.mesasage);}
    console.log(result);
    
    });
  db.run('update com set name="hasan" where commentid=3 '
  
  ,function(err){
      if(err){ return console.log(err.mesasage);}
      console.log('content change');
  }  );

db.run('delete from com where commentid=6'

,function(err){
    if(err){ return console.log(err.mesasage);}
    console.log('content delete');
});*/
db.all('select  com.name,com.content, (select art.articleName,art.date from art where art.articleid=com.articleid) from com'

,function(err,table){  
    if(err){ return console.log(err.mesasage);
    }
console.log(table);


  
});









db.close((err) => {
    if (err){
    
    return console.error(err.mesasage);
    
    }
    console.log('close connection');
    
    });
    
