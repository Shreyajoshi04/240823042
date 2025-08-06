exports.index=(req,res) => {
    res.send("welcome to the ph.D students API!\n");

};

exports.show =(req,res) => {
    res.send(`showing data for ID: ${req.params.id}\n`);

}

exports.store =(req,res) => {
    res.send(`Data received: ${req.body.name}, ${req.body.city}\n`);

}

exports.update=(req,res) => {
    res.send(
        `Data updated for ID; ${req.params.id},name: ${req.body.name}, city: ${req.body.city}\n`);
        
    
};

exports.delete =(req,res) => {
    res.send(`Data deleted for ID: ${req.params.id}/n`);

};