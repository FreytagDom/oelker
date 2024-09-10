// pages/api/proxy.js
export default async function handler(req, res) {
    const response = await fetch('http://www.bod.de/api/shopwidget/index.php?action=getBookInfo&objectID=3337720&swKey=b7df79e2a4d83b0f2b448867c3cf567f&type=print&size=large&shop=de');
    const data = await response.json();
  
    res.status(200).json(data);
  }
  