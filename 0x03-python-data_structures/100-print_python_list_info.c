#include <stdio.h>
#include "Python.h"
#include <object.h>
#include <listobject.h>
/**
  *print_python_list_info - Fuction that prints info for python list
  *
  *@p: PyObject
  *
  *Return: Nothing
  */
void print_python_list_info(PyObject *p)
{
	long int s, x;
	PyListObject *list;
	PyObject *item;

	s = Py_SIZE(p);
	printf("[*] Python list size = %ld\n", s);

	list = (PyListObject *)p;
	printf("[*] Allocated = %ld\n", list->allocated);

	for (x = 0; x < size; x++)
	{
		item = PyList_GetItem(p, x);
		printf("Element %ld: %s\n", x, Py_TYPE(item)->tp_name);
	}
}
