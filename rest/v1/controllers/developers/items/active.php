<?php

require '../../../core/functions.php';
require '../../../core/header.php';
require '../../../models/developers/Items.php';

$conn = null;
$conn = checkDbConnection();
$items = new Items($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("itemsid", $_GET)) {

        checkPayload($data);
        $items->items_aid = $_GET['itemsid'];
        $items->items_is_active = trim($data["isActive"]);
        $items->items_datetime = date("Y-m-d H:i:s");

        checkId($items->items_aid);
        $query = checkActive($items);
        http_response_code(200);
        returnSuccess($items, "items", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();

