var fs = require('fs')
var fileNames = []
var oneRun = true
var fileArray = 'ExistingFiles.txt'
var found = false;
var user_input = process.stdin;
user_input.setEncoding('utf-8');

console.log('Enter a new Filename: ') //take userinput of file
console.log("fnames: ", fileNames) //array of file names

if( !oneRun ){
    readContent(function (err, content) {
        if(err) throw err;
        fileNames = content.split(",")
        console.log("fnames: ",fileNames)
        console.log('Enter Filename : ')
    })
}

function readContent(callback) {
    fs.readFile(fileArray, 'utf-8', function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

if (fs.existsSync(fileArray)) oneRun = false
console.log("oneRun : ", oneRun)


user_input.on('data', function(data) { 
    
    data = data.replace(/(\r\n|\n|\r)/gm,"");
    found = fileNames.includes(data)
    if(found){
        console.log(data, "File Name already exists, give new file name")
    }else{
        fileNames.push(data)
        fs.writeFile(data,'You are awesome', function(err){  //writing in all newly created file
            if(err) throw err;
        })
        fs.writeFile(fileArray, fileNames, function(err){  //if user re-runs the program and file name is found 
            if(err) throw err;
        })
    }
})
