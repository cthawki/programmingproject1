
<?PHP
require("MyConnectionMysql.php");
require("MyCodeMysql.php");

$obj = new MyConnectionMysql();
$obj->setConn();
    
$qObj = new MyCodeMysql();
$qObj->setConn( $obj->getConn());
//$invoice = $_GET['invoice'];
$invoice = "35001";
$q = "SELECT
o.InvoiceNumber as \"Order Number\", o.CustomerID as \"Customer Number\" ,o.InvoiceDate as \"Order Date\",
ol.ProductNumber as \"Product Number\",

ol.Quantity*ol.UnitPrice as \"Bill Amount\"
 from HSD.INVOICE as o,HSD.LINE_ITEM as ol
 where o.InvoiceNumber = ol.InvoiceNumber AND ol.InvoiceNumber = '$invoice'";
$qObj->setQuery($q);
 $data = $qObj->jsonTable();
 echo($data);
?>

