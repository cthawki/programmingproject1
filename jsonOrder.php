
<?PHP
require("MyConnection.php");
require("MyCode.php");

$obj = new MyConnection();
$obj->setConn();
    
$qObj = new MyCode();
$qObj->setConn( $obj->getConn());
$invoice = $_GET['invoice'];
//$invoice = "21617";
$q = "SELECT
o.ordernum as \"Order Number\", o.customernum as \"Customer Number\" ,o.orderdate as \"Order Date\",
ol.partnum as \"Part Number\",
ol.numordered as \"Number Ordered\", ol.quotedprice as \"Quoted Price\",
ol.numordered*ol.quotedprice as \"Bill Amount\"
 from premiere.orders as o,premiere.orderline as ol
 where o.ordernum = ol.ordernum AND ol.ordernum = '$invoice'";
$qObj->setQuery($q);
 $data = $qObj->jsonTable();
 echo($data);
?>
