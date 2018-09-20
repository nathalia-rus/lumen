
const express = require('express');

const app = express();
const cors = require('cors');
const router = require('./router');

const port = 3010;

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port, console.log('listening in port 3010'));

// all
// app.get("/userdata", controller.getLumenUserData);

// list
// app.put("/listItem/:id", controller.updateLumenUserList);
// app.delete("/listItem/:id", controller.deleteLumenListItem);

// notes
// app.put("/voteUp/:id", controller.voteUp);
// app.put("/voteDown/:id", controller.voteDown);
