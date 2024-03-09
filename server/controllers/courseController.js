const conn = require('../database/conn');

exports.createCourse = (req, res) => {
    const { name, max_seats, start_date } = req.body;
    const sql = 'INSERT INTO Courses (name, max_seats, start_date) VALUES (?, ?, ?)';
    conn.query(sql, [name, max_seats, start_date], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.updateCourse = (req, res) => {
    const { name, max_seats, start_date } = req.body;
    const sql = 'UPDATE Courses SET name = ?, max_seats = ?, start_date = ? WHERE course_id = ?';
    conn.query(sql, [name, max_seats, start_date, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.registerCourse = (req, res) => {
    const { name, email, phone_number, linkedin_profile } = req.body;
    const sql = 'INSERT INTO Leads (name, email, phone_number, linkedin_profile, course_id) VALUES (?, ?, ?, ?, ?)';
    conn.query(sql, [name, email, phone_number, linkedin_profile, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};