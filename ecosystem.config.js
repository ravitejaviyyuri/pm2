module.exports = {
      apps : [{
        name:"ECOM-NEXT",
        script: 'npm',
        args: 'run start',
        watch: '.'
      }],
    
      deploy : {
        production : {
          "user" : 'ubuntu',
          "host" : 'localhost',
          "ref"  : 'origin/master',
          "repo" : 'git@github.com:ravitejaviyyuri/pm2.git',
          "path" : '/home/ubuntu/pm2/ecom-react',
          "pre-deploy-local": '',
          "post-deploy" : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --name ECOM-NEXT',
          "pre-setup": ''
        }
      }
    };
