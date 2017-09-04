
<?PHP
require("MyConnection.php");
require("MyCode.php");

$obj = new MyConnection();
$obj->setConn();
    
$qObj = new MyCode();
$qObj->setConn( $obj->getConn());
    
$q ="SELECT
  ordernum 
  FROM
    premiere.orders";

$qObj->setQuery($q);
 $data = $qObj->jsonTable();
 echo($data);
?>
