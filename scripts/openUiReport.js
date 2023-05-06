const { exec } = require('child_process');
const path = require('path');

const uiReportPath = path.resolve(__dirname, '..', '.loki', 'report.html');

exec(`start chrome ${uiReportPath}`);
