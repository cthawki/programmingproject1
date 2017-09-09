<!DOCTYPE html>

<html>

<head>
<title>Database Login Screen</title>
<meta http-equiv="Content-Type" content="text/html; charset=">
</head>

<body>

<?PHP
require("MyConnectionMysql.php");
require("MyCodeMysql.php");

$obj = new MyConnectionMysql();
$obj->setHost('cthawki.it.pointpark.edu');
$obj->setUser('cthawki');
$obj->setPsw('mystery55');
$obj->setDb('HSD');
$obj->setSchema('HSD');
$obj->setConn();
$obj->displayValues();
$qObj = new MyCodeMysql();
$qObj->setConn( $obj->getConn());
$q ="SELECT"
  customernumber as \"Customer Number\",
  rtrim(customername) as \"Name\",
  rtrim(street) as \"Street\",
  rtrim(city) as \"City\",
  state as \"State\",
  zip as \"Zip\",
  format(balance, 2) as \"Balance\",
  format(creditlimit, 2) as \"Credit Limit\",
  FROM
    premiere.customer";
$qObj->setQuery($q);
$qObj->displayTable();
echo("<br><br>");

?>

<style>
body {background-color: red;}
h1   {color: pink;}

</body>
</html>
