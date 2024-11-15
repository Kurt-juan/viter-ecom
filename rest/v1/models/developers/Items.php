<?php
class Items
{
    public $items_aid;
    public $items_title;
    public $items_price;
    public $items_photo;
   
    public $items_category;
    public $items_is_active;
    public $items_datetime;
    public $items_created;

    public $connection;
    public $lastInsertedId;

    public $tblitems;

    public $items_start;
    public $items_total;
    public $items_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblitems = "ecom_items";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblitems} ";
            $sql .= "( items_title, ";
            $sql .= "items_price, ";
            $sql .= "items_photo, ";
       
            $sql .= "items_category, ";
            $sql .= "items_is_active, ";
            $sql .= "items_datetime, ";
            $sql .= "items_created ) values ( ";
            $sql .= ":items_title, ";
            $sql .= ":items_price, ";
            $sql .= ":items_photo, ";
         
            $sql .= ":items_category, ";
            $sql .= ":items_is_active, ";
            $sql .= ":items_datetime, ";
            $sql .= ":items_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "items_title" => $this->items_title,
                "items_price" => $this->items_price,
                "items_photo" => $this->items_photo,
          
                "items_category" => $this->items_category,
                "items_is_active" => $this->items_is_active,
                "items_datetime" => $this->items_datetime,
                "items_created" => $this->items_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * from {$this->tblitems} ";
            $sql .= "order by items_is_active desc, ";
            $sql .= "items_title asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * from {$this->tblitems} ";
            $sql .= "order by items_is_active desc, ";
            $sql .= "items_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->items_start - 1,
                "total" => $this->items_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblitems} ";
            $sql .= "where items_title like :items_title ";
            $sql .= "order by items_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "items_title" => "%{$this->items_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblitems} ";
            $sql .= "where items_aid  = :items_aid ";
            $sql .= "order by items_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "items_aid" => $this->items_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblitems} set ";
            $sql .= "items_title = :items_title, ";
            $sql .= "items_price = :items_price, ";
            $sql .= "items_photo = :items_photo, ";
           
            $sql .= "items_category = :items_category, ";
            $sql .= "items_datetime = :items_datetime ";
            $sql .= "where items_aid = :items_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "items_title" => $this->items_title,
                "items_price" => $this->items_price,
                "items_photo" => $this->items_photo,
     
                "items_category" => $this->items_category,
                "items_datetime" => $this->items_datetime,
                "items_aid" => $this->items_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblitems} set ";
            $sql .= "items_is_active = :items_is_active, ";
            $sql .= "items_datetime = :items_datetime ";
            $sql .= "where items_aid = :items_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "items_is_active" => $this->items_is_active,
                "items_datetime" => $this->items_datetime,
                "items_aid" => $this->items_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblitems} ";
            $sql .= "where items_aid = :items_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "items_aid" => $this->items_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "select items_title from {$this->tblitems} ";
            $sql .= "where items_title = :items_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "items_title" => "{$this->items_title}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // name
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select product_items_id from {$this->tblitems} ";
    //         $sql .= "where product_items_id = :product_items_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_items_id" => $this->items_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblitems} ";
            $sql .= "where items_is_active = :items_is_active  ";
            $sql .= "order by items_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "items_is_active" => $this->items_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblitems} ";
            $sql .= "where ";
            $sql .= "items_is_active = :items_is_active ";
            $sql .= "and items_title like :items_title ";
            $sql .= "order by items_is_active desc, ";
            $sql .= "items_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "items_title" => "%{$this->items_search}%",
                "items_is_active" => $this->items_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}