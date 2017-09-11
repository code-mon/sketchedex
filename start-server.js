const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'packages/server', shell: true };
require('child_process').spawn('npm', args, opts);