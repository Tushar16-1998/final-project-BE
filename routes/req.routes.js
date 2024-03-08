const router = require('express').Router();
const ReqForm = require('../models/ReqForm.model');

/* Create our GET all route */
router.get("/", async (req, res)=>{
    try{
        const reqForm = await ReqForm.find()
        res.status(200).json(allReqForm);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Error while creating the requisition Form"});
    }
}); 

/* Get by id */
router.get("/req/:id", async (req, res) => {
    try {
        // destructure the id via route params
    const {id} = req.params;
        // find the user via Id.
    const reqform = await ReqForm.findById(id);
    res.status(200).json(reqform);
    }
    catch (error){
        res.status(500).json({message: "Error while creating the Requisition Form"});
    }
})


/* Create */
router.post("/req", async (req, res) => {
    const {destination, passangers, dateTimeRange, email, kids, disabilitys, notes} = req.body;

    try{
    const newReq = await ReqForm.create({destination, passangers, dateTimeRange, email, kids, disabilitys, notes});

    res.status(200).json(newReqForm);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "Error while creating a new requisition"});
    }
})

/* Update */
router.put("/req/:id", async (req, res) => {
    try {
      /* Destructure the id via router params */
      const { id } = req.params;
      const {
        destination, passangers, dateTimeRange, email, kids, disabilitys, notes} = req.body

        if(!destination|| !passangers || !dateTimeRange || !email){
            return res.status(400).json({message: "Please fill all mandatory fields!"})
          }
      /* Find the user via the id and send it back to the client */
      const updateReqForm = await Patient.findByIdAndUpdate(id, {
        destination, passangers, dateTimeRange, email, kids, disabilitys, notes
      }, { new: true });
      res.status(200).json(updateReqForm);
    } catch (error) {
        res.status(500).json({message: "Error while creating the Requisition form"});
    }
  })


  /* Delete */
router.delete("/req/:id", async (req, res) => {
    try {
      /* Destructure the id via route params */
      const { id } = req.params;
      /* Find the user via the id and send it back to the client */
      await ReqForm.findByIdAndDelete(id);
      res.status(200).json("Requisition was deleted");
    } catch (error) {
        res.status(500).json({message: "Error while deleting the Patient"});
    }
  })

module.exports = router;