const notAllowed=['poo','butt','doodoo','corn-face','redux'];

module.exports= function(req,res,next){
    while ( notAllowed.find( word => req.body.text.includes(word) ) ) {
        const badWord = notAllowed.find( word => req.body.text.includes(word) );
        req.body.text = req.body.text.replace( badWord, 'fuck'.repeat( badWord.length ) );
      }
    
      next();
}