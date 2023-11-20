#!/usr/bin/python3
def safe_function(fct, *args):
    import sys
    try:
        ret_value = fct(*args)
        return ret_value
    except Exception as errinfo:  # stores error_info in err_info var
        print("Exception: {}".format(errinfo), file=sys.stderr)
        return None
