# urlshortener


steps to be followed to excute the program

  1.npm install 
  2.npm start
  
  
 API end points
 
 
 
  REST POST API for create short URL from long URL
  
        /api/v1/url/geturl
        
        Method:POST

        Request Body:

        example:


        {

          "url":"https://en.wikipedia.org/wiki/Hypericum_aegypticum"

        }
        
        Response:
        
        
        {
        
          "status": "success",
          "url": "https://urlshortenerapp77.herokuapp.com/url/kxmx2470qz9egd7m0vr"
        
        }
        


 
 
  
  REST GET APi for redirecting short URL to Actual URL

        /url/{shortId}

        Method:GET

        example:

        https://urlshortenerapp77.herokuapp.com/url/kxmx2470qz9egd7m0vr
        
   Swagger API Documentation
   
         /api-docs/
   
   

  
  
  
  
