module.exports = {
  showBidPage(req, res) {
    res.format({
      json(){
        res.json(res.locals);
      },
    });
  },
  handleUpdate(req, res) {
    res.json(res.locals)
  },
  badUpdate(req,res){
    res.sendStatus(401);
  }
};
