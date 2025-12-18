const express = require("express");
const dotenv = require("dotenv");
//load .env variables
dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", "middlewares/views");
app.use(express.static("middlewares/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const router = express.Router();
app.use(router);
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

router.get('/resume', (req, res) => {
    res.render('resume-page');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});