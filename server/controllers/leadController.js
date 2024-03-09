const conn = require('../database/conn');

exports.updateLead = (req, res) => {
    const { status } = req.body;
    const sql = 'UPDATE Leads SET status = ? WHERE lead_id = ?';
    conn.query(sql, [status, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.searchLead = (req, res) => {
    const { name, email } = req.body;
    const sql = 'SELECT * FROM Leads WHERE name = ? OR email = ?';
    conn.query(sql, [name, email], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.addComment = (req, res) => {
    const { comment } = req.body;
    const sql = 'INSERT INTO Comments (comment, lead_id, instructor_id) VALUES (?, ?, ?)';
    conn.query(sql, [comment, req.params.lead_id, req.params.instructor_id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};


// For getting lead course details
exports.getLeadCourseDetails = (req, res) => {
    const sql = `
        SELECT 
            Leads.lead_id, 
            Leads.name AS lead_name, 
            Leads.email AS lead_email, 
            Instructors.instructor_id, 
            Instructors.name AS instructor_name, 
            Instructors.email AS instructor_email, 
            Courses.name AS course_name, 
            Application.status AS application_status
        FROM 
            Application
        JOIN 
            Leads ON Application.lead_id = Leads.lead_id
        JOIN 
            Courses ON Application.course_id = Courses.course_id
        JOIN 
            Instructors ON Courses.instructor_id = Instructors.instructor_id
    `;
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};