const Task =require("../Models/task");

exports.getAllTasks = async (req,res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    } catch(error){
        res.status(500).json({error : "Internal Server Error"});
    }
};

exports.getTaskById = async (req,res)=>{
    try{
        const taskId = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(taskId)){
            return res.status(400).json({error:"Invalid task ID"})
        }

        const task = await Task.findById(taskId);

        if(!task){
            return res.status(404).json({error : "Task not found"})
        }

        res.json(task);

    } catch(error){
        res.status(500).json({error : "Internal Server Error" });

    }

}

exports.createTask = async (req,res) => {
    try{
        const newTask = new Task(req.body);
        await newTask.save();
        res.json(newTask);
    } catch(error){
        res.status(500).json({error : "Internal Server Error" });
    }
};

exports.updateTask = async(req,res) => {
    try{
        const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updateTask);

    } catch(error){
        res.status(500).json({error : "Internal Server Error" });

    }
}

exports.deleteTask = async (req, res) => {
    try {
      const deleteTask = await Task.findByIdAndRemove(req.params.id);
      res.json(deleteTask);

    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
