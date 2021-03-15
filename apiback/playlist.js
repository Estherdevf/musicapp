let dataPlaylists=[];

const fetchDatas = async () => {
    var options = {
     method: 'GET',
     headers: {
         "Content-Type": "application/json"
     }
    };
  await fetch('  http://192.168.56.1:3000/index.php', options)
     .then((res => res.json()))
     .then((datas) => dataPlaylists = datas);
}

