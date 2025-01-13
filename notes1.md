# Server side scripting /Back-end Development 
Web browser communicate with web server using (HTTP) . When you click a link on a web-page,submit a form or run a search,an http request is sent to server .

Web-server waits for clint's request message process them when they arrieved and reply to the web browser with http response message .

![alt text](image.png)

## Static vs Dynamic Website

### Static site : 
- showes same hardcoded content from the server when ever a perticular resource is requested  
- Read only content 
### Dynamic site :
- A dynamic site returns diffrent data from the server according  to the data being provided by users  
- Read and write 
- coustomised content .

*Most of the code to support Dynamic site must run on server --> creating this code is known as Server side Programming of Backend developmemnt 

-> All the Logic beside at server side 
## Clint-side Scripting 
Clint-side scripting deals with improving appearience and behaviour of rendring webpage 

![alt text](image-1.png)

## server-side 
Mostly involve in choosing which content is to return to browser in response to request 

### What can you do on server side ?

Server-side scripting is very usefull because it allows us to efficiently delever information tailored for individual users and there by create a much bettter user experience .
### Advantages 
- Efficient storage and delivery of information 
- Coustomised user experience
- Controlled eccess to the content 

Most large-scale websites use server-side code to dynamically display different data when needed, generally pulled out of a database stored on a server and sent to the client to be displayed via some code (e.g. HTML and JavaScript).

Perhaps the most significant benefit of server-side code is that it allows you to tailor website content for individual users. Dynamic sites can highlight content that is more relevant based on user preferences and habits. It can also make sites easier to use by storing personal preferences and information — for example reusing stored credit card details to streamline subsequent payments.

It can even allow interaction with users of the site, sending notifications and updates via email or through other channels. All of these capabilities enable much deeper engagement with users.

## Are server-side and client-side programming the same?

Let's now turn our attention to the code involved in server-side and client-side programming. In each case, the code is significantly different:

- They have different purposes and concerns.

- They generally don't use the same programming languages (the exception being JavaScript, which can be used on the server- and client-side).
- They run inside different operating system environments.

Code running in the browser is known as client-side code and is primarily concerned with improving the appearance and behavior of a rendered web page. 
This includes selecting and styling UI components, creating layouts, navigation, form validation, etc.

By contrast, server-side website programming mostly involves choosing which content is returned to the browser in response to requests. 

The server-side code handles tasks like validating submitted data and requests, using databases to store and retrieve data and sending the correct data to the client as required.

![alt text](image-2.png)

## Summary

 server-side code is run on a web server and that its main role is to control what information is sent to the user (while client-side code mainly handles the structure and presentation of that data to the user).

You should also understand that it is useful because it allows us to create websites that efficiently deliver information tailored for individual users and have a good idea of some of the things you might be able to do when you're a server-side programmer.

Lastly, you should understand that server-side code can be written in a number of programming languages and that you should use a web framework to make the whole process easier.