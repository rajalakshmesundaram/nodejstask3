TO create student and mentor database
++ To create student database,
     ++student details create using ``post(api/createstudent)``
     ++get student details using ``get(api/getStudent)``
     ++get student details by Id using ``get(api/getStudentById/:id)``
     ++Update student details using ``post(api/updateStudent/:id)``
     ++delete student details using ``delete(api/deleteStudent)``
++ To create mentor database,
   ++mentor details create using ``post(apimentor/getmentor)``
   ++get mentor details by ID using ``get(apimentor/updatementor/:id)``
   ++ API to Assign a student to Mentor ``post(apimentor/assignstudent/:studentId)``
   ++API to Assign or Change Mentor for particular Student
    ``post(apimentor/assignmentor/:mentorId)``
   ++ API to show all students for a particular mentor 
   ``post(apimentor/allstudent/:mentorId)``
   ++Write an API to show the previously assigned mentor for a particular student.
    ``post(/apimentor/showstudent/:studentId)``
     