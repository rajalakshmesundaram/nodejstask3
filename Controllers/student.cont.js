import Student from "../Models/student.js";
export const createStudent=async(req,res)=>{
    try {
        const student=new Student (req.body);
        await student.save()
        console.log(student);
        res.status(200).json({message:"student created sucessfully",student:student})
    } catch (error) {
        console.error(err)
        res.status(500).json({error:'server error'})
    }
}
export const getStudent=async(req,res)=>{
    try {
        const student=await Student.find()
        res.status(200).json({data:student})
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}
export const getStudentById=async(req,res)=>{
    try {
        const StuId=req.params.id
        const student=await Student.findById(StuId)
        if(!student){
            return res.status(401).json({message:"student id is not found"})
        }
        res.status(200).json([student])
    } catch (error) {
        res.status(500).json({Error:"Internal server error"})
    }

}
export const updateStudent=async(req,res)=>{
try {
    const stuId=req.params.id
    const {name,batch,email}=req.body
    const result=await Student.updateOne({_id:stuId},{name,batch,email})
    if(result.matchedCount === 0){
        return res.status(404).json({error:'student id is not found'})
    }
    const updatedStudent=await Student.findById(stuId)
    res.status(200).json([updatedStudent])
} catch (error) {
    res.status(500).json({error:'Internal server error'})
}
}
export const deleteStudent=async(req,res)=>{
    try {
        const stuId=req.params.id
        const result=await Student.deleteOne({_id:stuId})
        if(result.deletedCount === 0){
           return res.status(404).json({ error: "student id is not found" }); 
        }
         res.status(200).json({message:'student deleted successfully'});
    } catch (error) {
         res.status(500).json({error:'Internal server error'})

    }
}