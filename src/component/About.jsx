import React from 'react'

function About() {
    return (
        <div className="rounded-xl m-10 w-2/3 m-h-[70vh] bg-purple-200 leading-10 mx-auto p-10 ">
            <h2>About ToDoMaster</h2>
            <p>Welcome to ToDoMaster, your ultimate task management tool designed to help you stay organized, productive, and on top of your daily responsibilities. Whether you're a student, a professional, or simply someone looking to manage their personal tasks, ToDoMaster is here to make your life easier.</p>
            <h2>Our Mission</h2>
            <p>At ToDoMaster, our mission is to provide a simple yet powerful platform that enables users to manage their tasks efficiently. We believe that a well-organized life leads to increased productivity and reduced stress, allowing you to focus on what truly matters.</p>
            <h2>Key Features</h2>
            <ul>
                <li>Add Tasks: Easily add new tasks to your to-do list to keep track of everything you need to accomplish.</li>
                <li>Edit Tasks: Update and modify your tasks as needed to reflect changes in your plans.</li>
                <li>Delete Tasks: Remove tasks that are no longer relevant or necessary to keep your to-do list clean and organized.</li>
                <li>Show Finished Tasks: View your completed tasks to track your progress and stay motivated by seeing what you’ve accomplished.</li>
            </ul>
            <h2 className="text-center my-10">Thank you for choosing ToDoMaster. Let’s get things done together!</h2>
        </div>
    )
}

export default About