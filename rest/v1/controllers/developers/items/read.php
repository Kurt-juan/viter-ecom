
<?php
$conn = null;
$conn = checkDbConnection();
$items = new Items($conn);
$error = [];
$returnData = [];
if (array_key_exists("itemsid", $_GET)) {
    $items->items_aid = $_GET['itemsid'];
    checkId($items->items_aid);
    $query = checkReadById($items);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($items);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();

