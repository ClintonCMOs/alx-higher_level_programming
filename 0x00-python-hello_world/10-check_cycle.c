#include <stdio.h>
#include <stdlib.h>
#include "lists.h"
/**
 * check_cycle - checks for cycles in loop
 * @list: list to take in
 * Return: integer value
 */
int check_cycle(listint_t *list)
{
	listint_t *slow_ptr, *fast_ptr;

	slow_ptr = list;
	fast_ptr = list;
	while (slow_ptr != NULL && fast_ptr != NULL)
	{
		slow_ptr = slow_ptr->next;
		if (fast_ptr->next)
			fast_ptr = fast_ptr->next->next;

		if (slow_ptr == fast_ptr)
			return (1);
	}
	return (0);
}
