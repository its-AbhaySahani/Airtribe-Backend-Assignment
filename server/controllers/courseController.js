const conn = require('../database/conn');

exports.createCourse = (req, res) => {
    const { name, max_seats, start_date, instructor_id } = req.body;
    const sql = 'INSERT INTO Courses (name, max_seats, start_date, instructor_id) VALUES (?, ?, ?, ?)';
    conn.query(sql, [name, max_seats, start_date, instructor_id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.updateCourse = (req, res) => {
    const { name, max_seats, start_date, instructor_id } = req.body;
    const sql = 'UPDATE Courses SET name = ?, max_seats = ?, start_date = ?, instructor_id = ? WHERE course_id = ?';
    conn.query(sql, [name, max_seats, start_date, instructor_id, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.registerCourse = (req, res) => {
    const { name, email, phone_number, linkedin_profile } = req.body;
    const sql = 'INSERT INTO Leads (name, email, phone_number, linkedin_profile, course_id) VALUES (?, ?, ?, ?, ?)';
    conn.query(sql, [name, email, phone_number, linkedin_profile, req.params.id], (err, result) => {
        if (err) throw err;
        // After inserting the lead, check if the course_id exists in the Courses table
        const checkCourseSql = 'SELECT * FROM Courses WHERE course_id = ?';
        conn.query(checkCourseSql, [req.params.id], (err, courseResult) => {
            if (err) throw err;
            if (courseResult.length > 0) {
                // If the course_id exists, insert a new row into the Application table
                const applicationSql = 'INSERT INTO Application (lead_id, course_id, status) VALUES (?, ?, "Waitlist")';
                conn.query(applicationSql, [result.insertId, req.params.id], (err, result) => {
                    if (err) throw err;
                    res.send(result);
                });
            } else {
                res.status(400).send('Invalid course_id');
            }
        });
    });
};