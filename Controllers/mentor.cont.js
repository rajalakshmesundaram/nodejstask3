import Mentor from "../Models/mentor.js";
import Student from "../Models/student.js";
export const createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    console.log(mentor);
    res.status(200).json({ message: "mentor created sucessfully", Mentor: mentor });
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
};
export const getMentor =async(req,res)=>{
  try {
    const mentor = await Mentor.find();
     res.status(200).json({ data:mentor });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
  

}
export const updateMentor=async(req,res)=>{
  try{
  const mentorId=req.params.id
  const {name,role,email,students}=req.body
  const result=await Mentor.updateOne({_id:mentorId},{name,role,email,students})
  if(result.matchedCount === 0){
    return res.status(404).json({error:"Mentor is not found"})
  }
  const updatedMentor=await Mentor.findById(mentorId)
  res.status(200).json([updatedMentor])
}
catch(error){
  res.status(500).json({error:"internal server error"})
}
}
//Write API to Assign a student to Mentor
export const assignstudent=async(req,res)=>{
  try {
    const{studentId}=req.params
    const{mentorId}=req.body
    const student=await Student.findByIdAndUpdate(studentId,{mentor:mentorId})
    res.status(200).json({message:`assigned a student successfully ${student.name}`,student:student})
  } catch (error) {
    res.status(500).json('internal server error')
  }
}
//Write API to Assign or Change Mentor for particular Student
export const assignmentor=async(req,res)=>{
  try {
    const{mentorId}=req.params
    const{studentId}=req.body
      const mentor = await Mentor.findByIdAndUpdate(
        mentorId,
        { students: studentId },
        { new: true }
      );
      res.status(200).json({message:'assign mentor to particular student',mentor})
  } catch (error) {
    res.status(500).json("internal server error");
  }
}
//Write API to show all students for a particular mentor
export const allstudent=async(req,res)=>{
  try {
    const{mentorId}=req.params
    const students=await Student.find({mentor:mentorId})
    res.status(200).json({message:"successfully fetched student data with mentor",students })
  } catch (error) {
     res.status(500).json("internal server error");
  }
}
//Write an API to show the previously assigned mentor for a particular student.
export const showMentor=async(req,res)=>{
  try {
    const{studentId}=req.params
    const student=await Student.findById(studentId).populate('mentor')
    res.status(500).json({message:"success",student})
  } catch (error) {
    res.status(500).json("internal server error");
  }
}
