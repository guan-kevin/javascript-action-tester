if [[ $LARGER_THAN_0 == 1 && $HELLO == "world" ]]; then
	echo "Environment variable in test.sh OK"
else
	echo "Bad environment variable in test.sh"
	exit 1
fi

echo "Test OK!"
