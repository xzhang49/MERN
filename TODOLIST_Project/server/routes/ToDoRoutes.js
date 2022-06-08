const { Router } = require("express");

const router = Router();

const {getToDo, postToDo, updateToDo, deleteToDo} = require("../controllers/ToDoController");

router.get("/get-todo", getToDo);
router.post("/post-todo", postToDo);
router.post("/update-todo", updateToDo);
router.post("/delete-todo", deleteToDo);

module.exports = router;