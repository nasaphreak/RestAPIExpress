const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose').set('debug', true)
const User = require('./model/user')
const BlogPost = require('./model/blogPost')
 
const url = 'mongodb://127.0.0.1/blogDB'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/login', (req, res) => {
    res.send('Hello World!')
    
})
app.post('/login', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true },function(err){
        if(err) throw err;
        console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
        const username = req.body.username
        User.find({
            'username' : username, 'password' : req.body.password
        }, function(err, user){
            if(err) throw err
            if(user.length === 1){ 
                return res.status(200).json(user)
            } else {
                console.log("Not found")
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }
             
        })
        
        
    });
})

app.get('/blogposts', (req, res) => {
    
    mongoose.connect(url, { useNewUrlParser: true },function(err){
        if(err) throw err;
        BlogPost.find({}, 'title author mainText date', function(err, blogPost) {
            if (err) throw err
            console.log(blogPost)
            return res.status(200).json(blogPost)
        }
        
        
        )

    })
})

app.post('/blogposts', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true },function(err){
        if(err) throw err;
        console.log('connected successfully, newBlogposts ',req.body.author,' title is ',req.body.title);
        //const author = req.body.author  Usarei para importar auxText e Name depois
        const newPost = new BlogPost({
            author : req.body.author, 
            title: req.body.title,
            mainText : req.body.mainText
        })

        newPost.save(function(err, newPost){
            if (err) throw err
            console.log(newPost.title + ' saved.')
            return res.status(200).json({
                status: 'success',
                message: 'Added'
            })
        })
        
        
    });
})



app.listen(3000, () => console.log('blog server running on port 3000!'))