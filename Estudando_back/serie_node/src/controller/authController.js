const express = require('express')

const User = require('../modeus/use')

const router = express.Router();

router.post("/register", async(req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({ user })
    } catch {
        re

    }
});