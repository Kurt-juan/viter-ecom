<?php
$conn = null;
$conn = checkDbConnection();
$items = new Items($conn);
$error = [];
$returnData = [];
if (array_key_exists("itemsid", $_GET)) {
    checkPayload($data);

    $items->items_aid = $_GET['itemsid'];
    $items->items_title = checkIndex($data, "items_title");
    $items->items_price = checkIndex($data, "items_price");
    $items->items_photo = checkIndex($data, "items_photo");
  
    $items->items_category = checkIndex($data, "items_category");

    $items->items_datetime = date("Y-m-d H:i:s");
    $items_title_old = strtolower($data["items_title_old"]);

    checkId($items->items_aid);

    compareName($items, $items_title_old, $items->items_title);

    $query = checkUpdate($items);
    returnSuccess($items, "items", $query);
}

checkEndpoint();
