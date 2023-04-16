const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.post('/upload', (req,res)=> {
    res.send('uploaded')
})

module.exports = router;