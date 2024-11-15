<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developers/Items.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$items = new Items($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();


    if (array_key_exists("start", $_GET)) {
        // get data
        $items->items_start = $_GET['start'];
        $items->items_total = 20;
        checkLimitId($items->items_start, $items->items_total);
        $query = checkReadLimit($items);
        $total_result = checkReadAll($items);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $items->items_total,
            $items->items_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
