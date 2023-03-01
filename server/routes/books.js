//File Name: books.js, Student Name: Aqeish Parvez, Student ID: 301225795, Web App Name: COMP229-MIDTERM-301225795

// modules required for routing
import { Router } from "express";

import { displayAddPage, displayBookList, displayEditPage, processAddPage, processDelete, processEditPage } from "../controllers/books.js";

const router = Router();

/* GET books List page. READ */
router.get('/books/list', displayBookList);
router.get('/books', displayBookList);

//  GET the Book Details page in order to add a new Book
router.get('/books/add', displayAddPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/books/add', processAddPage);

// GET the Book Details page in order to edit an existing Book
router.get('/books/edit/:id', displayEditPage);

// POST - process the information passed from the details form and update the document
router.post('/books/edit/:id', processEditPage);

// GET - process the delete by user id
router.get('/books/delete/:id', processDelete);


export default router;