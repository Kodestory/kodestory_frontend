import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
         Documents
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
         src
        </Link>
        <Typography color="textPrimary">index.js</Typography>
      </Breadcrumbs>
    <pre><code>
    {props.content} 
    {`server {
        listen 80;
        server_name beta.chaturbots.com;
        return 301 https://$host$request_uri;
}

server {
        listen 443 ssl;
        server_name beta.chaturbots.com;
        ssl_certificate /etc/letsencrypt/live/beta.chaturbots.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/beta.chaturbots.com/privkey.pem;

        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';
        location /  {
                proxy_pass    http://localhost:3010;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}`}
</code></pre>

    </div>
  );
}