#!/bin/sh
stripe version
stripe listen --forward-to backend:8000/stripe/webhook/