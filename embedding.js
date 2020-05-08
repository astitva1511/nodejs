const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: authorSchema
}));

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function updateAuthor(courseId){
    const course = await Course.update({_id: courseId},{
        $set: {
            'author.name' : 'Sherlock Holmes'
        }
    });
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}
updateAuthor('5eb5166a42210ec3e0983a9a');
//createCourse('Node Course', new Author({ name: 'Mosh' }));
