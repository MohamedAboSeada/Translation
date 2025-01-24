export function IF({exp,children}){
	return exp && children;
}

export function IFELSE({exp,children,fallback}){
	return exp ? children : fallback;
}