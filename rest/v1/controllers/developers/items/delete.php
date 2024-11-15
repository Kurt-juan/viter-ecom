<?php
$conn = null;
$conn = checkDbConnection();
$items = new Items($conn);
$error = [];
$returnData = [];
if (array_key_exists("itemsid", $_GET)) {
    $items->items_aid = $_GET['itemsid'];
    checkId($items->items_aid);
    // isAssociated($items);
    $query = checkDelete($items);
    returnSuccess($items, "items", $query);
}

checkEndpoint();
