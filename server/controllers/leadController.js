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