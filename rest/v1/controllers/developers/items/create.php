<?php
$conn = null;
$conn = checkDbConnection();

$items = new Items($conn);

if (array_key_exists("itemsid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$items->items_title = checkIndex($data, "items_title");
$items->items_photo = checkIndex($data, "items_photo");
$items->items_price = checkIndex($data, "items_price");
$items->items_category = checkIndex($data, "items_category");



$items->items_is_active = 1;
$items->items_created = date("Y-m-d H:i:s");
$items->items_datetime = date("Y-m-d H:i:s");


isNameExist($items, $items->items_title);

$query = checkCreate($items);
returnSuccess($items, "items", $query);