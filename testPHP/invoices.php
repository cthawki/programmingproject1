
<?PHP
require("MyConnectionMysql.php");
require("MyCodeMysql.php");

$obj = new MyConnectionMysql();
$obj->setConn();
    
$qObj = new MyCodeMysql();
$qObj->setConn( $obj->getConn());
    
$q ="SELECT
  invoiceNumber 
  FROM
    HSD.INVOICE";

$qObj->setQuery($q);
 $data = $qObj->jsonTable();
 echo($data);
?>
